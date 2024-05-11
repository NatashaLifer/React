import { useState } from 'react'

const useLocalStorage = (key: string, defaultValue: any) => {
    const storageValue = localStorage.getItem(key) || JSON.stringify(defaultValue)

    const [localStorageValue, setlocalStorageValue] = useState<any>(
        JSON.parse(storageValue) || defaultValue
    )

    const changeValue = (newValue: any) => {
        localStorage.setItem(key, JSON.stringify(newValue))

        setlocalStorageValue(() => {
            if (typeof newValue === "object") {
                return { ...newValue } 
            } else {
                return newValue
            }
        })
    }
    return [localStorageValue, changeValue]
}

export default useLocalStorage