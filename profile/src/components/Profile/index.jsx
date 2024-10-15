import styles from "./styles.module.css";
import Title from "../Title/index.jsx";
import ProfileSection from "../Profile/ProfileSection/index";
import LinkButton from "../LinkButton/index";
import { useState } from "react";

export default function Profile(props) {
  // [valor, funcaoModificadora]
  const [followText, setFollowText] = useState("Follow");

  function handleClick(event) {
    if ("Follow" === followText) {
      alert("Voce agora esta seguindo");
      setFollowText("Following");

      return;
    }

    if ("Following" === followText) {
      alert("Voce deixeou de seguir");
      setFollowText("Follow");
    }
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.githubUrl} target="_blank">
          GitHub
        </LinkButton>
        <LinkButton href={props.linkedinUrl} target="_blank">
          LinkedIn
        </LinkButton>
        <LinkButton href={props.twitterUrl} target="_blank">
          X
        </LinkButton>
      </ProfileSection>
    </div>
  );
}
