/*
 * authorized.ts
 * Copyright: Ouranos Studio 2019
 */

import { Role } from '@Models/global-types'


export default function authorized(roles: Role[], userRole: Role): boolean {
  if (userRole === Role.admin) return true

  return !!roles.find(role => role === userRole)
}
