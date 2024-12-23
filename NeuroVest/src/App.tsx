import { ErrorPage, SetupPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// const authState = false;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        {/* <Route index element={(authState ? (<HomePage />) : (<AuthPage />))} /> */}
        <Route index element={<SetupPage />} />
      </Routes>
    </BrowserRouter>
  )
}
