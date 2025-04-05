import React from 'react';
import styled from 'styled-components';

export const ExperienceSection = styled.div`
  margin-top: 2rem;
`;

export const CompanyName = styled.h2`
  color: #ffd700;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const RoleItem = styled.div`
  margin-bottom: 2rem;
`;

export const RoleTitle = styled.h3`
  color: #ffd700;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const RolePeriod = styled.span`
  color: #aaa;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const ResponsibilityList = styled.ul`
  list-style-type: none;
  padding-left: 1.5rem;
`;

export const ResponsibilityItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #ffd700;
  }
`;

interface ExperienceProps {
    company: string;
    roles: Array<{
        title: string;
        period: string;
        responsibilities: string[];
    }>;
}

export const Experience: React.FC<ExperienceProps> = ({ company, roles }) => {
    return (
        <ExperienceSection>
            <CompanyName>{company}</CompanyName>
            {roles.map((role, index) => (
                <RoleItem key={index}>
                    <RoleTitle>{role.title}</RoleTitle>
                    <RolePeriod>{role.period}</RolePeriod>
                    <ResponsibilityList>
                        {role.responsibilities.map((responsibility, idx) => (
                            <ResponsibilityItem key={idx}>{responsibility}</ResponsibilityItem>
                        ))}
                    </ResponsibilityList>
                </RoleItem>
            ))}
        </ExperienceSection>
    );
}; 