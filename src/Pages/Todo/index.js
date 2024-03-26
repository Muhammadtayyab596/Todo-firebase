import React from 'react'
import TextFiled from '../../Components/TextField/index'
import CustomButton from '../../Components/Button/index'
import { Link } from 'react-router-dom'
import TodoList from '../../Components/List/TodoList'

const Todo = () => {
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-200">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 class="text-xl my-5 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Todo Appilication
          </h1>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <TextFiled placeholder="Enter You Todo" type="text" label="Todo" name="Todo" />
              </div>
              <div className='mt-4'>
                <CustomButton type='button' label='Add Todo' />
              </div>
              <TodoList />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Todo