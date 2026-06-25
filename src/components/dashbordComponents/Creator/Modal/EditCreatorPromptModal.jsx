"use client";

import React, { useState } from "react";
import { Pencil, CircleInfo } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { editPromptAction } from "@/actions/creatorAction/editPromptAction";
import { toast } from "react-toastify";

export default function EditCreatorPromptModal({ token, prompt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const updatedData = {
      title: formData.get("title"),
      description: formData.get("description"),
      content: formData.get("content"),
      category: formData.get("category"),
      aiTool: formData.get("aiTool"),
      difficultyLevel: formData.get("difficultyLevel"),
      visibility: formData.get("form-visibility"),
    };

    try {
      const result = await editPromptAction(
        token,
        prompt._id || prompt.id,
        updatedData,
      );

      if (result.success) {
        toast.success(result.message);
        setIsOpen(false);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Network error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="light"
        type="button"
        title="Edit Prompt"
        onPress={() => setIsOpen(true)}
        className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition min-w-0"
      >
        <Pencil className="w-4 h-4" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0f172a] rounded-2xl p-2">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading className="text-xl font-bold text-gray-900 dark:text-white">
                  Edit Prompt
                </Modal.Heading>
              </Modal.Header>

              <form onSubmit={handleUpdate} className="space-y-4 p-2">
                <div>
                  <label className="text-xs md:text-sm font-semibold mb-1 block text-gray-700 dark:text-gray-200">
                    Prompt Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={prompt?.title}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-xs md:text-sm font-semibold mb-1 block text-gray-700 dark:text-gray-200">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    defaultValue={prompt?.description}
                    required
                    rows={2}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs md:text-sm font-semibold mb-1 block text-gray-700 dark:text-gray-200">
                    Prompt Content *
                  </label>
                  <textarea
                    name="content"
                    defaultValue={prompt?.content}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-slate-900 text-sm font-mono text-gray-900 dark:text-white focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold mb-1 block text-gray-700 dark:text-gray-200">
                      Category
                    </label>
                    <select
                      name="category"
                      defaultValue={prompt?.category}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none cursor-pointer"
                    >
                      <option value="marketing">Marketing</option>
                      <option value="coding">Coding & Dev</option>
                      <option value="design">Design & Art</option>
                      <option value="writing">Copywriting</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-gray-700 dark:text-gray-200">
                      AI Tool
                    </label>
                    <select
                      name="aiTool"
                      defaultValue={prompt?.aiTool || prompt?.tool}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none cursor-pointer"
                    >
                      <option value="chatgpt">ChatGPT</option>
                      <option value="midjourney">Midjourney</option>
                      <option value="claude">Claude AI</option>
                      <option value="stable-diffusion">Stable Diffusion</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-gray-700 dark:text-gray-200">
                      Difficulty
                    </label>
                    <select
                      name="difficultyLevel"
                      defaultValue={prompt?.difficultyLevel || "beginner"}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none cursor-pointer"
                    >
                      <option value="beginner">🔰 Beginner</option>
                      <option value="intermediate">⚙️ Intermediate</option>
                      <option value="pro">🔥 Pro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block text-gray-700 dark:text-gray-200">
                    Visibility
                  </label>
                  <div className="flex gap-4 p-1">
                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                      <input
                        type="radio"
                        name="form-visibility"
                        value="public"
                        defaultChecked={prompt?.visibility === "public"}
                        className="accent-blue-600"
                      />
                      Public
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                      <input
                        type="radio"
                        name="form-visibility"
                        value="private"
                        defaultChecked={prompt?.visibility === "private"}
                        className="accent-blue-600"
                      />
                      Private
                    </label>
                  </div>
                </div>

                <div className="flex gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600 dark:text-amber-400 text-xs">
                  <CircleInfo className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>
                    After editing the prompt, it may return to the{" "}
                    <strong>Pending</strong> state for admin review again.
                  </p>
                </div>

                <Modal.Footer className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                  <Button
                    className="bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-semibold rounded-xl"
                    onPress={() => setIsOpen(false)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm shadow-blue-500/10"
                    isLoading={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}
