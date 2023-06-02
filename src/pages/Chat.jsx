import Layout from 'components/common/LeftLayout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import ChatLeft from 'components/chat/ChatLeft';
import ChatRight from 'components/chat/ChatRight';

const Chat = () => {
  return (
    <Layout title="Chat" padding="p-0 sm:px-10 sm:py-8">
      <Breadcrumbs title="Chat" link="/chat" />

      <div className="grid grid-cols-12 mt-8">
        <ChatLeft />
        <ChatRight />
      </div>
    </Layout>
  );
};

export default Chat;
