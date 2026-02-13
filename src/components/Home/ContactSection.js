import React, { useState } from "react";
import styled from "styled-components";

const ContactSection = ({ email, github }) => {
  const [copied, setCopied] = useState(false);
  const handleMailCopy = e => {
    e.preventDefault();

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactCard>
        <Badge>Connect</Badge>
        <Title>
          원활한 커뮤니케이션과 <br /> <span>함께 성장하는 분위기</span>를
          지향합니다.
        </Title>

        <InfoGroup>
          <EmailLink
            as="button"
            onClick={e => handleMailCopy(e)}
            title="이메일 주소 복사"
            copied={copied}
          >
            <Icon>{copied ? "✅" : "✉️"}</Icon>
            {copied ? "이메일이 복사되었습니다." : email}
          </EmailLink>

          <GitHubLink href={github} target="_blank" rel="noreferrer">
            <Icon>🐙</Icon>
            GitHub
          </GitHubLink>
        </InfoGroup>

        <FooterText>편하게 연락해 주시면 감사하겠습니다.</FooterText>
      </ContactCard>
    </ContactContainer>
  );
};

export default ContactSection;

const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const ContactCard = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-accent-lavender) 0%,
    var(--color-accent-mint) 100%
  );
  padding: 60px 40px;
  border-radius: 32px;
  text-align: center;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Badge = styled.span`
  background: rgba(255, 255, 255, 0.5);
  padding: 6px 16px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 12px;
  line-height: 1.4;
  color: var(--color-text-primary);
  word-break: keep-all;

  span {
    background: linear-gradient(
      to right,
      var(--color-text-primary),
      var(--color-text-secondary)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }
`;

const InfoGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const CommonLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 16px;
  background: var(--color-bg-white);
  color: var(--color-text-primary);
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const EmailLink = styled(CommonLink)`
  font-size: 1rem;
`;

const GitHubLink = styled(CommonLink)`
  background: var(--color-text-primary);
  color: white;
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  opacity: 0.8;
`;
