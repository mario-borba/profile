import styles from "./styles.module.css";
import Title from "../Title/index.jsx";
import ProfileSection from "../Profile/ProfileSection/index";
import LinkButton from "../LinkButton/index"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button>Follow</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={styles.links}>
          <LinkButton href={props.githubUrl} target="_blank">
            GitHub
          </LinkButton>
          <LinkButton href={props.linkedinUrl} target="_blank">
            LinkedIn
          </LinkButton>
          <LinkButton href={props.twitterUrl} target="_blank">
            X
          </LinkButton>
        </div>
      </ProfileSection>
    </div>
  );
}
