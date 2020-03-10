/*
 * authorized.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Role } from '@Models/global-types'


export default function authorized(roles: Role[], userRole: Role): boolean {
  if (userRole === Role.admin) return true

  return !!roles.find(role => role === userRole)
}
