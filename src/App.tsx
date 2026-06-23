import { Switch, Route, Router as WouterRouter } from "wouter";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import TeamAssistantCoach from "@/pages/TeamAssistantCoach";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/team-assistant-coach" component={TeamAssistantCoach} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Particles />
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
