import ImageDragDrop from 'components/common/ImageDragDrop';

const ProductGallery = () => {
  return (
    <div className="pb-5">
      <label className="block text-[#424141] dark:text-gray-50 font-medium text-base mb-1.5">
        Product gallery
      </label>
      <div className="p-2">
        <ImageDragDrop />
      </div>
    </div>
  );
};

export default ProductGallery;
