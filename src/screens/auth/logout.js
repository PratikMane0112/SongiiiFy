import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the local storage
    window.localStorage.clear();
    
    // Reload the page to ensure all state is reset
    window.location.reload();
  }, []); // No need to include `navigate` in the dependency array

  return null;
}
