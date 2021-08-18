/* eslint-disable prefer-arrow-callback */
// useEffect(() => {
//   getTodosFromServer(endpoints.GET_TODOS_URL).then((response) => {
//     if (response) {
//       setTodos(response)
//     } else {
//       console.error('Sorry, something went wrong')
//     }
//   })
// }, [])

// queryToServer(
//   endpoints.ADD_TODO_URL,
//   fetchMethods.M_POST,
//   newTodo
// ).then((res) => {
//   if (res) {
//     dispatch(createTodo(newTodo))
//   } else {
//     console.error('Sorry, something went wrong')
//   }
// })

// const removeTodo = (todoId: string) => {
//   dispatch(removeTodo(todoId))
// queryToServer(
//   endpoints.DELETE_TODOS_URL,
//   fetchMethods.M_DELETE,
//   todoId
// ).then((res) => {
//   if (res) {
//     setTodos((state) =>
//       state.filter((todo: ITodo) => todo.key !== todoId)
//     )
//   } else {
//     console.error('Sorry, something went wrong')
//   }
// })
// }

// const changeStatus = useCallback(
//   (todoKey: string) => {
//     dispatch(changeTodoStatus(todoKey))
// const todoForChange = todoItems.find(
//   (todo: ITodo) => todo.key === todoKey
// )
// const changedTodos: ITodo[] = todoItems.map((todo: ITodo) => {
//   if (todo.key === todoKey) {
//     todo.completed = !todo.completed
//   }
//   return todo
// })

// queryToServer(
//   endpoints.EDIT_TODO_URL,
//   fetchMethods.M_PATCH,
//   todoForChange
// ).then((res) => {
//   if (res) {
//     setTodos(changedTodos)
//   } else {
//     console.error('Sorry, something went wrong')
//   }
// })
//   },
//   [dispatch]
// )

// const clearCompleted = useCallback(() => {
//   dispatch(clearCompletedTodos())
// const completedTodos = todoItems.filter(
//   (todo: ITodo) => todo.completed
// )
// const completedTodosKeys: string[] = []
// completedTodos.forEach((todo: ITodo) =>
//   completedTodosKeys.push(todo.key)
// )

// queryToServer(
//   endpoints.DELETE_TODOS_URL,
//   fetchMethods.M_DELETE,
//   completedTodosKeys
// ).then((res) => {
//   if (res) {
//     setTodos((state) =>
//       state.filter((todo: ITodo) => !todo.completed)
//     )
//   } else {
//     console.error('Sorry, something went wrong')
//   }
// })
// }, [dispatch])

// const toggleAll = useCallback(
//   (status: boolean) => {
// interface TodosData {
//   keys: Array<string>
//   data: { completed: boolean }
// }

// const todosData: TodosData = {
//   keys: [],
//   data: { completed: status }
// }

// todoItems.forEach((todo: ITodo) => {
//   todosData.keys.push(todo.key)
// })

// queryToServer(
//   endpoints.CHANGE_STATUSES_URL,
//   fetchMethods.M_PATCH,
//   todosData
// ).then((res) => {
//   if (res) {
//     setTodos(
//       todoItems.map((todo: ITodo) => ({
//         ...todo,
//         completed: status
//       }))
//     )
//   } else {
//     console.error('Sorry, something went wrong')
//   }
// })
//   },
//   []
// )
// import { filters } from './constants/constants'

//   const [todoToRender, setTodosToRender] = useState(todoItems)
//   const [activeFilter, setFilter] = useState < string > filters.all

//   useEffect(() => {
//     if (activeFilter === filters.active) {
//       setTodosToRender(
//         todoItems.filter((todo: ITodo) => !todo.completed)
//       )
//     }

//     if (activeFilter === filters.completed) {
//       setTodosToRender(
//         todoItems.filter((todo: ITodo) => todo.completed)
//       )
//     }

//     if (activeFilter === filters.all) {
//       setTodosToRender(todoItems)
//     }
//   }, [activeFilter, todoItems])
// const [todoItems, setTodos] = useState<ITodo[]>([])

// useEffect(() => {
//   setTodos(todos)
// }, [todos])
// import { all, apply, call, fork, put, take } from 'redux-saga/effects'
// import { eventChannel } from 'redux-saga'
// import * as actions from '../actions'
// import io from 'socket.io-client'

// function createSocketConnection(url, namespace) {
//   return io(url + '/' + namespace)
// }

// function createSocketChannel(socket) {
//   return eventChannel((emit) => {
//     const eventHandler = (event) => {
//       emit(event.payload)
//     }

//     const errorHandler = (errorEvent) => {
//       emit(new Error(errorEvent.reason))
//     }

//     socket.on('message', eventHandler)
//     socket.on('error', errorHandler)

//     const unsubscribe = () => {
//       socket.off('message', eventHandler)
//     }

//     return unsubscribe
//   })
// }

// function* writeSocket(socket) {
//   while (true) {
//     const { eventName, payload } = yield take(actions.WEBSOCKET_SEND)
//     socket.emit(eventName, payload)
//   }
// }

// function* watchSocketChannel() {
//   const socket = yield call(
//     createSocketConnection,
//     'http://localhost:3000',
//     'terminal'
//   )
//   const socketChannel = yield call(createSocketChannel, socket)

//   console.log(socket)

//   while (true) {
//     try {
//       const payload = yield take(socketChannel)
//       yield put({ type: actions.WEBSOCKET_MESSAGE, payload })
//     } catch (err) {
//       console.log('socket error: ', err)
//     }
//   }
// }

// userlist = {} // Массив юзеров
// io.sockets.on('connection', function (socket) {
//   socket.on('connect', function (data, callback) {
//     socket.user_id = data.user_id // в user_id передаём идентификатор пользователя
//     if (socket.user_id in userlist) {
//       callback(false) // Ага, этот юзер уже открыл вкладку, значит ничего не делаем
//     } else {
//       callback(true) // А вот тут он новенький
//       userlist[socket.user_id] = data // Фигачим его в массив
//       UpdateUserList() // Обновляем список онлайн юзеров
//     }
//   })
//   // При дисконнекте
//   socket.on('disconnect', function () {
//     delete userlist[socket.user_id]
// Тут немного магии, чтобы юзеры в списке онлайн на клиенте не моргали,
// когда например они ходят по ссылкам сайта
//     setTimeout(function () {
//       UpdateUserList()
//     }, 1000)
//   })

//   function UpdateUserList() {
//     io.sockets.emit('updateusers', userlist)
//   }
// })
