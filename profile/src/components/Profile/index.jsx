import styles from "./styles.module.css";
import Title from "../Title/index.jsx";
import ProfileSection from "../Profile/ProfileSection/index";
import LinkButton from "../LinkButton/index";

export default function Profile(props) {
  function handleClick(event) {
    console.log(event);

    alert("Voce agora esta seguindo");
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          Follow
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
