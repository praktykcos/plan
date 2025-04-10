const ModalTeacher = ({ inOpen, onClose }: {inOpen: boolean, onClose: () => void}) => {

  if (!inOpen) return null  

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-[400px] h-[630px] relative shadow-xl">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
        </button>

        <h2 className="text-xl font-semibold mb-6 text-center">Add Teacher</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Surname</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pesel</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#4CBC9A] text-white rounded hover:bg-green-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTeacher;
