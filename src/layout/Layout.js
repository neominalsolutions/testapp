import { Link, Outlet } from "react-router-dom";


function Layout() {


  return (<>
    <nav>
      <Link to="">Anasayfa</Link>
      {' '}
      <Link to="about">Hakkımızda</Link>
      {' '}
      <Link to="users">Kullanıcılar</Link>
      {/* tarayıcı refleshlemeden yönlendirmek için React Router Dom Link özelliğinden yararlanırız. */}
      {/* asp-controller asp-action */}
    </nav>
    <Outlet />
    {/* Mvc deki RenderBody özelliği */}
  </>)
}

export default Layout;