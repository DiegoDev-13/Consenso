import {MyRoutes, Sidebar, Device, Light, Dark, AuthContextProvider, MenuAmbur, useUsersStore, Login, SpinnerLoader} from './index'
import {createContext, useState} from 'react'
import {styled, ThemeProvider} from 'styled-components'
import {useLocation} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'

export const ThemeContext = createContext(null)

function App() {

  const {getUsersStore, dataUser} = useUsersStore()

  // const [theme, setTheme] = useState('dark')
  const theme = dataUser?.theme === '0' ? 'light' : 'dark'
  const themeStyle = theme === 'light' ? Light : Dark
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {pathname} = useLocation()


  const {isLoading, isError} = useQuery({
    queryKey: ["users"],
    queryFn: getUsersStore,
  })

  if(isLoading) return <SpinnerLoader />

  if(isError) return <h1>Error...</h1>



  return (
    <>
      <ThemeContext.Provider value={{ theme}}>
        <ThemeProvider theme={themeStyle}>

          <AuthContextProvider>

            {
               pathname !== '/login' 
                ? (
                <Container className={sidebarOpen ? 'active' : ''}>
                  <div className='ContentSidebar'>
                    <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
                  </div>
                  <div className='ContentMenuAmbur'>
                    <MenuAmbur />
                  </div>
                  <ContainerBody>
                    <MyRoutes />
                  </ContainerBody>
                </Container> 
              ) 
              : (
              <Login />
              )
            }

          </AuthContextProvider>

        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  background: ${(props) => props.theme.bgtotal};
  transition: 0.3s ease-in-out;

  .ContentSidebar {
    display: none;
  }

  .ContentMenuAmbur {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr; 
    
    &.active {
      grid-template-columns: 220px 1fr; 
    }

    .ContentSidebar {
      display: initial;
    }

    .ContentMenuAmbur {
      display: none;
    }
  }
`

const ContainerBody = styled.div`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
    
  }
`

export default App
