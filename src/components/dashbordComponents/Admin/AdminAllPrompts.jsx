"use client";

import React, { useEffect, useState } from "react";
import { 
  Check,
  Xmark,
  TrashBin,
  CircleInfo
} from "@gravity-ui/icons";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AdminPromptsTable() {
 
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [selectedPromptId, setSelectedPromptId] = useState(null);
  const [rejectionFeedback, setRejectionFeedback] = useState("");

  // Fetch prompts
  useEffect(() => {
    const getPrompts = async () => {
      try {
        const res = await fetch(`${API}/allprompts`, { cache: "no-store" });
        const data = await res.json();
        setPrompts(data.data || []);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      } finally {
        setLoading(false);
      }
    };
    getPrompts();
  }, []);

  // Approve prompt
  const handleApprove = async (id) => {
    try {
      const res = await fetch(`${API}/admin/prompt/status/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" })
      });
      const data = await res.json();
      if (data?.success) {
        toast.success("Approve")
      }
    } catch (error) {
      console.error("Error approving prompt:", error);
    }
  };

  // Reject prompt submit
  const handleRejectSubmit = async (e) => {
    e.preventDefault();
    if (!rejectionFeedback.trim()) return alert("Please provide a reason.");

    try {
      const res = await fetch(`${API}/admin/prompt/status/${selectedPromptId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "rejected",
          feedback: rejectionFeedback
        } )
      });
      const data = await res.json();
      setIsRejectModalOpen(false);
      setRejectionFeedback("");
      if (data?.success) {
        toast.success("Reject")
      }
    } catch (error) {
      console.error("Error rejecting prompt:", error);
    }
  };

  // Delete prompt
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this prompt?")) return;
    try {
      const res = await fetch(`${API}/admin/prompt/${id}`, { method: "DELETE" });
      const data = await res.json()
      if (data?.success) {
        toast.success("Delete")
      }
    } catch (error) {
      console.error("Error deleting prompt:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] bg-slate-900">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 min-h-screen text-slate-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100">Manage Prompts</h1>
        <p className="text-sm text-slate-400">Approve, reject, or delete user submitted prompts.</p>
      </div>

      {/* Dark Table Container */}
      <div className="overflow-x-auto bg-slate-900 rounded-xl shadow-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 border-b border-slate-800 text-slate-400 text-sm font-semibold">
              <th className="p-4">Title</th>
              <th className="p-4">Creator</th>
              <th className="p-4">AI Tool</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
            {prompts.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-slate-500">No prompts found.</td>
              </tr>
            ) : (
              prompts.map(prompt => (
                <tr key={prompt._id} className="hover:bg-slate-800/50 transition-colors">
                  {/* Title & Feedback */}
                  <td className="p-4 max-w-xs">
                    <p className="font-semibold text-slate-100 truncate">{prompt?.title}</p>
                    {prompt?.status === "rejected" && prompt?.feedback && (
                      <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <CircleInfo className="w-3 h-3" /> {prompt?.feedback}
                      </p>
                    )}
                  </td>

                  {/* Creator */}
                  <td className="p-4 text-slate-400">{prompt.creator?.name || "Unknown"}</td>

                  {/* AI Tool */}
                  <td className="p-4">
                    <span className="bg-blue-950/40 text-blue-400 px-2.5 py-1 border border-blue-900/50 rounded text-xs font-medium">
                      {prompt.aiTool}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
                      prompt.status === "approved" ? "bg-green-950/50 text-green-400 border border-green-900/30" :
                      prompt.status === "pending" ? "bg-amber-950/50 text-amber-400 border border-amber-900/30" :
                      "bg-red-950/50 text-red-400 border border-red-900/30"
                    }`}>
                      {prompt.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-right space-x-1">
                    {prompt.status !== "approved" && (
                      <button
                        onClick={() => handleApprove(prompt._id)}
                        className="p-2 text-green-400 hover:bg-green-950/50 rounded-lg transition-colors"
                        title="Approve"
                      >
                        <Check />
                      </button>
                    )}

                    {prompt.status !== "rejected" && (
                      <button
                        onClick={() => {
                          setSelectedPromptId(prompt._id);
                          setIsRejectModalOpen(true);
                        }}
                        className="p-2 text-amber-400 hover:bg-amber-950/50 rounded-lg transition-colors"
                        title="Reject"
                      >
                        <Xmark />
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(prompt._id)}
                      className="p-2 text-red-400 hover:bg-red-950/50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <TrashBin />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Dark Reject Reason Modal */}
      {isRejectModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <form onSubmit={handleRejectSubmit} className="bg-slate-900 p-6 rounded-xl shadow-2xl w-full max-w-md mx-4 border border-slate-800">
            <h3 className="text-lg font-bold text-slate-100 mb-2">Reject Prompt</h3>
            <p className="text-sm text-slate-400 mb-4">Please specify the reason for rejecting this prompt.</p>
            
            <textarea
              value={rejectionFeedback}
              onChange={e => setRejectionFeedback(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500/50 min-h-[100px] resize-none placeholder-slate-600"
              placeholder="Type rejection reason here..."
              required
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsRejectModalOpen(false);
                  setRejectionFeedback("");
                }}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Reject Prompt
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}