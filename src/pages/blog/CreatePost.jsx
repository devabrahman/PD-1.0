import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// importing components
import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import MetaSectionCreate from 'components/blog/MetaSectionCreate';
import RightSideCreate from 'components/blog/RightSideCreate';

const CreatePost = () => {
  return (
    <Layout title="Create post">
      <Breadcrumbs title="Create post" link="/create-post" />

      <section>
        <form className="w-full flex gap-12 pt-14">
          <section className="w-3/4">
            {/* post title */}
            <div>
              <label className="block font-medium mb-2">Post Title</label>
              <input
                className="w-full rounded-xl px-4 dark:bg-dark py-2 border border-gray-200 dark:border-gray-500 outline-none focus:ring-0 focus:outline-none"
                type="text"
                name="productTitle"
              />
            </div>

            {/* post description */}
            <div>
              <label className="block font-medium mb-2 mt-6">Post description</label>
              <ReactQuill theme="snow" className="post_description dark:bg-dark" />
            </div>

            <section className="mt-4 w-full">
              {/* seo section managed here */}
              <MetaSectionCreate />
            </section>
          </section>

          {/* Right Section */}
          <RightSideCreate />
        </form>
      </section>
    </Layout>
  );
};

export default CreatePost;
