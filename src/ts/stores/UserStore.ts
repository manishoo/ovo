/*
 * UserStore.ts
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import { IPersistableStore } from 'resub-persist'
import { Me } from 'src/ts/views/Register/types/Me'
import * as SyncTasks from 'synctasks'


const STORAGE_KEYS = {
  user: 'user',
  token: 'token',
}

@AutoSubscribeStore
class UserStore extends StoreBase implements IPersistableStore {
  public name = 'UserStore'
  private user: Me | undefined = undefined

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    RX.Storage.getItem(STORAGE_KEYS.user)
      .thenAsync(userJSONString => {
        if (!userJSONString) {
          deferred.resolve(void 0)
          return
        }

        try {
          this.user = JSON.parse(userJSONString) as Me
        } catch (e) {
          RX.Storage.removeItem(STORAGE_KEYS.user)
        }
        deferred.resolve(void 0)
      })
      .catch(error => {
        deferred.reject(error)
      })

    return deferred.promise()
  }

  async getAndSetUser() {
    // return client.query({
    //   query: gql`
    // 		query Me {
    // 		  user {
    // 		    id
    // 		    username
    // 		    email
    // 		    avatar {
    // 		      url
    // 		    }
    // 		    path {
    // 		    	id
    // 		    	type
    // 		      name
    // 		      datetime
    // 		      meal {
    // 		        name
    // 		        items {
    // 		          type
    // 		        	title
    // 		        	unitDescription
    // 		          totalTime
    // 		          seq
    // 		          amount
    // 		          thumbnail {
    // 		            url
    // 		          }
    // 		          subtitle
    // 		          id
    // 		        }
    // 		      }
    // 		    }
    // 		    session
    // 		  }
    // 		}
    //  	`
    // })
    // .then(({ data: { user } }) => {
    // 	this.user = user
    // 	RX.Storage.setItem(STORAGE_KEYS.user, JSON.stringify(this.user)) // FIXME are you sure?
    // 	this.trigger()
    // })
  }

  setUser(user?: Me) {
    if (user) {
      RX.Storage.setItem(STORAGE_KEYS.user, JSON.stringify(user))
      this.user = user
    } else {
      RX.Storage.removeItem(STORAGE_KEYS.user)
      this.user = null
    }

    this.trigger()
  }

  getPropKeys() {
    return [
      'user',
    ]
  }

  @autoSubscribe
  getUser(): Me | undefined {
    return this.user
  }

  setSession(session?: string) {
    if (session) {
      RX.Storage.setItem(STORAGE_KEYS.token, session)
    } else {
      RX.Storage.removeItem(STORAGE_KEYS.token)
    }

    this.trigger()
  }

  @autoSubscribe
  async getSession(): Promise<string | undefined> {
    return RX.Storage.getItem(STORAGE_KEYS.token)
  }
}

export default new UserStore()
