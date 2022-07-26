// 使用localStorage做本地存储
export function setStorage(key, value) {
	sessionStorage.setItem(key, JSON.stringify(value))
}
export function getStorage(key) {
	return JSON.parse(sessionStorage.getItem(key))
}

export function removeStorage(key) {
	sessionStorage.removeItem(key)
}
