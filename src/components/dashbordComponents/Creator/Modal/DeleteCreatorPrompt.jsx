"use client";

import React, { useState } from "react";
import { TrashBin, CircleExclamation } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { deletePromptAction } from "@/actions/creatorAction/deletePromptAction";
import { toast } from "react-toastify";

export function DeleteCreatorPromptModal({ token, promptId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const result = await deletePromptAction(token, promptId);
      
      if (result.success) {
        toast.success(result.message);
        setIsOpen(false); 
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Network error! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <Button
        variant="light"
        type="button"
        title="Delete Prompt"
        onPress={() => setIsOpen(true)}
        className="p-2.5 rounded-xl border border-transparent hover:border-rose-500/20 text-rose-500 hover:bg-rose-500/5 transition min-w-0"
      >
        <TrashBin className="w-4 h-4" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[380px]">
              <Modal.CloseTrigger />
              
              <Modal.Header className="flex flex-col items-center pt-6">
                <Modal.Icon className="bg-rose-500/10 text-rose-500 p-3 rounded-full mb-2">
                  <CircleExclamation className="size-6" />
                </Modal.Icon>
                <Modal.Heading className="text-center text-lg font-bold">Delete Prompt?</Modal.Heading>
              </Modal.Header>
              
              <Modal.Body className="text-center text-sm text-gray-500 dark:text-gray-400 px-6">
                <p>
                  Are you sure you want to delete this prompt? This action cannot be undone and it will be permanently removed from the marketplace.
                </p>
              </Modal.Body>
              
              <Modal.Footer className="flex gap-3 pt-4 pb-6 px-6">
                <Button 
                  className="w-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-semibold rounded-xl" 
                  onPress={() => setIsOpen(false)}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-sm shadow-rose-500/10"
                  onPress={handleDelete}
                  isLoading={loading}
                >
                  {loading ? "Deleting..." : "Yes, Delete"}
                </Button>
              </Modal.Footer>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}