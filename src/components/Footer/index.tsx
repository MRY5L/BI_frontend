import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '牛至星球出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '智能 BI',
          title: '智能 BI',
          href: 'https://github.com/MRY5L?tab=repositories',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/MRY5L?tab=repositories',
          blankTarget: true,
        },
        {
          key: '智能 BI',
          title: '智能 BI',
          href: 'https://github.com/MRY5L?tab=repositories',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
