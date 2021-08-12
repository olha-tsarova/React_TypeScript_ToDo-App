/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function setUserTokens(response): void {
  localStorage.setItem('accessToken', response.tokens.accessToken)
  localStorage.setItem('refreshToken', response.tokens.refreshToken)
}
