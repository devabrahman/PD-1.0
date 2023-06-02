import Layout from 'components/common/LeftLayout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import { toast } from 'react-hot-toast';

const Toast = () => {
  return (
    <Layout title="Toast" padding="p-0 sm:px-10 sm:py-8">
      <Breadcrumbs title="Toast" link="/toast" />

      <div className="w-4/5 mx-auto mt-6">
        <h2 className="text-2xl font-semibold mt-12">Toast messages</h2>
        <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing</p>

        <div className="grid grid-cols-4 gap-5 gap-y-10">
          <button
            onClick={() => toast.success('Successfully toasted!')}
            className="bg-green-400 py-2 rounded-xl text-white">
            Success toast
          </button>

          <button
            onClick={() => toast.error('Error toast message...')}
            className="bg-red-400 py-2 rounded-xl text-white">
            Error toast
          </button>

          <button
            onClick={() =>
              toast.success('Look at my styles.', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200'
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE'
                }
              })
            }
            className="bg-blue-400 py-2 rounded-xl text-white">
            Themed toast
          </button>

          <button
            onClick={() =>
              toast('Good Job!', {
                icon: '👏'
              })
            }
            className="bg-amber-400 py-2 rounded-xl text-white">
            Emoji Toast
          </button>

          <button
            onClick={() =>
              toast('Hello Darkness!', {
                icon: '👏',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff'
                }
              })
            }
            className="bg-gray-400 py-2 rounded-xl text-white">
            Dark Mode
          </button>

          <button
            onClick={() =>
              toast(
                "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
                {
                  duration: 6000
                }
              )
            }
            className="bg-yellow-400 py-2 rounded-xl text-white">
            Multi line
          </button>

          <button
            onClick={() =>
              toast((t) => (
                <span>
                  Custom and <b>bold</b>
                  <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
                </span>
              ))
            }
            className="bg-green-400 py-2 rounded-xl text-white">
            JSX toast
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Toast;
