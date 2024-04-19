import {create} from 'zustand'
import {produce} from 'immer'
import {persist,createJSONStorage} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CoffeeData from '../data/coffeeData'
import BeansData from '../data/beansData'


export const useStore= create(
    persist(
        (set,get)=>({
            CoffeeList:CoffeeData,
            BeanList :BeansData,
            CartPrice:0,
            FavoritesList:[],
            CartList:[],
            OrderHistoryList:[]
        }),
        {
            name:'coffee-app',
            storage:createJSONStorage(()=>AsyncStorage)
        }
    )
)