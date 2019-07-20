/*
 * UserStore.ts
 * Copyright: Ouranos Studio 2019
 */

import gql from 'graphql-tag'
import RX from 'reactxp'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import { IPersistableStore } from 'resub-persist'
import { User } from 'src/ts/models/FoodModels'
import * as SyncTasks from 'synctasks'
import client from '../app/client'

const STORAGE_KEYS = {
	user: 'user',
	token: 'token',
}

@AutoSubscribeStore
class UserStore extends StoreBase implements IPersistableStore {
	public name = 'UserStore'
	private user: User | undefined = undefined

	startup(): SyncTasks.Thenable<void> {
		let deferred = SyncTasks.Defer<void>()

		RX.Storage.getItem(STORAGE_KEYS.user)
			.thenAsync(userJSONString => {
				if (!userJSONString) {
					deferred.resolve(void 0)
					return
				}

				this.user = JSON.parse(userJSONString) as User
				deferred.resolve(void 0)
			})
			.catch(error => {
				deferred.reject(error)
			})

		return deferred.promise()
	}

	async getAndSetUser() {
    return client.query({
      query: gql`
				query Me {
				  me {
				    id
				    username
				    email
				    avatar {
				      url
				    }
				    path {
				    	id
				    	type
				      name
				      datetime
				      meal {
				        name
				        items {
				          type
				        	title
				        	unitDescription
				          totalTime
				          seq
				          amount
				          thumbnail {
				            url
				          }
				          subtitle
				          id
				        }
				      }
				    }
				    session
				  }
				}
		 	`
    })
		.then(({ data: { me } }) => {
			this.user = me
			RX.Storage.setItem(STORAGE_KEYS.user, JSON.stringify(this.user)) // FIXME are you sure?
			this.trigger()
		})
  }

	setUser(user: User) {
		RX.Storage.setItem(STORAGE_KEYS.user, JSON.stringify(user))
		this.user = user
		this.trigger()
	}

	getPropKeys() {
		return [
			'user',
		]
	}

	@autoSubscribe
	getUser(): User | undefined {
		return this.user
	}

	async getSession(): Promise<string | undefined> {
		if (this.user) {
			return this.user.session
		}

		return RX.Storage.getItem(STORAGE_KEYS.token)
	}
}

export default new UserStore()
