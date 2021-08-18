/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function setUserId(response): void {
  localStorage.setItem('userId', response.user.id)
}
