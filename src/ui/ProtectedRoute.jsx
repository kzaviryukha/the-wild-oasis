import { useUser } from "../features/authentication/useUser"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import styled from "styled-components"
import Spinner from "./Spinner"

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
  height: 100vh;
`

function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  // 1. Load the auth user
  const { isLoading, isAuthenticated } = useUser()

  // 2. If there is NO auth user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login")
    },
    [isAuthenticated, isLoading, navigate],
  )

  // 3. While loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children
}

export default ProtectedRoute
