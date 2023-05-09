import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';

const Chat = () => {
  return (
    <Layout title="Chat" padding="p-0 sm:px-10 sm:py-8">
      <Breadcrumbs title="Chat" link="/chat" />
    </Layout>
  );
};

export default Chat;
