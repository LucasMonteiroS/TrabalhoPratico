import { createBrowserRouter } from "react-router-dom";

import { Home }  from "./pages/home";
import { Contato } from  './pages/contato';
import { Sobre } from  './pages/sobre'
import { NotFound } from './pages/not'
import { Produto } from './pages/produto'
import { Layout } from './components/layout'
import { Login } from "./pages/login";
import { Private } from "./routes/Private";
import { Favorito } from "./pages/favorito";
import { Detalhe } from "./pages/detalhe";
import { AlterarUsuario } from "./pages/alterarUsuario";

const router  = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:  "/",
                element: <Home />,
                },
                {
                    path:"/contato",
                    element:<Contato/>
                },
                {
                    path:"/favorito",
                    element:<Favorito/>
                },
                {
                    path:"/detalhe/:id",
                    element:<Detalhe/>
                },
                {
                    path: "/sobre",
                    element:<Sobre/>
                },
                {
                    path: '/*',
                    element:<NotFound/>
                },
                {
                    path: '/produto',
                    element:<Private><Produto/></Private>
                },
                {
                    path: '/produto/:id',
                    element:<Produto/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '*',
                    element: <NotFound/>
                },
                {
                    path: 'editUser',
                    element: <AlterarUsuario/>
                }
        ]
    }
]);


export { router }