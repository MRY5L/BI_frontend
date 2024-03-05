import { QuestionCircleOutlined } from '@ant-design/icons';
import '@umijs/max';
export type SiderTheme = 'light' | 'dark';
export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://www.bilibili.com/video/BV1pK411A7EU/?spm_id_from=333.337.search-card.all.click');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
