import { Routes, Route } from "react-router-dom";
import {
  Categories,
  Genre,
  Home,
  Library,
  Marketplace,
  Profile,
} from "./pages/main";
import { Login, Register, Type, Verify } from "./pages/auth";
import ReelFlow from "./pages/main/ReelFlow";
import Ecomics from "./pages/main/Ecomics";
import { Toaster } from "sonner";
import { useAuth } from "./hooks";
import { useEffect } from "react";
import { Create } from "./pages/main/Creator";

const App = () => {
  const { getUser } = useAuth();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="type" element={<Type />} />
          <Route path="register" element={<Register />} />
          <Route path="verify" element={<Verify />} />
        </Route>
        <Route path="/categories" element={<Categories />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/library" element={<Library />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/ecomics" element={<Ecomics />} />
        <Route path="/reel" element={<ReelFlow />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/creator">
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
