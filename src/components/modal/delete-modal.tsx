import { useState } from "react";

type DeleteModalProps = {
  id: string | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  id,
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:border-strokedark dark:bg-boxdark p-5 rounded-lg shadow-lg">
            <p className="font-semibold mb-3">Confirm Delete</p>
            <p className="text-sm mb-5" style={{ height: "80px" }}>
              Are you sure you want to delete this item (id: {id})?
            </p>
            <div className="flex justify-end gap-4.5">
              <button
                className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
