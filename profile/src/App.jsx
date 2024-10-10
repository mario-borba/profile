import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://avatars.githubusercontent.com/u/108151251?v=4"
        name="Mario Borba"
        bio="Full-stack developer at Neo Sistemas."
        email="mariobielborba@hotmail.com"
        phone="+5548998423802"
        githubUrl="https://github.com/mario-borba"
        linkedinUrl="https://www.linkedin.com/in/mario-gabriel-borba-de-souza-a98a141a4/"
        twitterUrl="https://x.com/mariogbs"
      />
    </div>
  );
}
