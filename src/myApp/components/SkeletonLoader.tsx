import { View, Text } from 'react-native'
import React from 'react'

const SkeletonLoader = () => {
  return ( 
<View className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <View className="animate-pulse flex space-x-2 flex-row">
    <View className='flex-row'>
    <View className="rounded-full bg-slate-400 h-10 w-10 z-10 border-white border-2"></View>
    <View className="rounded-full bg-slate-200 h-10 w-10 relative -left-4"></View>
    </View>
    <View className="flex-1 space-y-6 py-1">
      <View className="space-y-3">
        <View className="grid grid-cols-3 gap-4">
          <View className="h-2 bg-slate-200 rounded col-span-2"></View>
          <View className="h-2 bg-slate-200 rounded col-span-1"></View>
        </View>
      </View>
    </View>
  </View>
</View>

  )
}

export default SkeletonLoader