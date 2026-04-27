import Addtion from "./Addition"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import CallbackMemo from "./Hooks/CallbackMemo";
import Ref from "./Hooks/Ref";
import MyComponent from "./Hooks/DemoRef";
import Reducer from "./Hooks/Reducer";
import Form from "./Forms/Form";
import { Output } from "./outputList/Output";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import User from "./User";
import UserDetail from "./UserDetail";
import Create from "./CRUD/Create";
import UserTable from "./CRUD/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { createContext } from "react";

export const demoContext = createContext()

function App() {
  const user = "admin";
  let ar = [
    "html", "css", "javascript", "react"
  ]
  let a = { user, ar }

  let data = useSelector((state) => state)
  console.log(data);

  let dispatch = useDispatch()

  return (
    <div>
      <h1>
        welcome to parthasarathi
      </h1>
      <demoContext.Provider value={data}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Click to increment
        </button>

        {
          data.role === "admin" ? (
            <button>Admin panel</button>
          ) : (
            <button>Client panel</button>
          )
        }

        {/* <Addtion user={a} /> */}
        {/* <State />
      <Effect /> */}
        {/* <CallbackMemo />
      <Ref />
      <MyComponent />
      <Reducer /> */}
        {/* <Form />
      <Output /> */}
        <h1>Hello welcome to react js</h1>
        <Routes>
          <Route path="/" element={<Addtion user={a} />} >

            <Route path="hook-state" element={<State />} />
            <Route path="hook-effect" element={<Effect />} />

            <Route path="hooks">
              <Route path="state" element={<State />} />
              <Route path="effect" element={<Effect />} />
              <Route path="callback-memo" element={<CallbackMemo />} />
              <Route path="ref" element={<Ref />} />
              <Route path="my-component" element={<MyComponent />} />
              <Route path="reducer" element={<Reducer />} />
            </Route>
            <Route path="userdata" element={<User />} />
            <Route path="user/:name" element={<UserDetail />} />

            <Route path="create" element={<Create />} />
            <Route path="user-table/:name" element={<UserTable />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>

        </Routes>
      </demoContext.Provider>
    </div>
  )
}

export default App
