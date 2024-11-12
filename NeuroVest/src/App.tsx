import { AuthPage, ErrorPage, HomePage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const authState = false;

export default function App() {
  return (
    <BrowserRouter>
    <div className="container-md">
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={(authState ? (<HomePage />) : (<AuthPage />))} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
