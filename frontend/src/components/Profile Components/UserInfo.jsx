import React from 'react'


const UserInfo = () => {
  return (
    <div class="bg-white p-3 border-t-4 border-blue-400 shadow-lg">
    <div class="image overflow-hidden">
        <img class="h-96 w-auto mb-4 mx-auto "
            src="/assets/user.png"
            alt=""/>
    </div>
    <div className='flex flex-row justify-between'>
    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">User One</h1>
    <button ><small>Edit</small></button>
    </div>
    
    <h3 class="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
    <ul
        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
        <li class="flex items-center py-3">
            <span>Status</span>
            <span class="ml-auto"><span
                    class="bg-blue-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
        </li>
        <li class="flex items-center py-3">
            <span>Member since</span>
            <span class="ml-auto">Nov 07, 2016</span>
        </li>
    </ul>
</div>

  )
}

export default UserInfo