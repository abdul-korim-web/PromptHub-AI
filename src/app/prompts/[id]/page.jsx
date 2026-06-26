"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Card, Avatar, Button, Chip, Spinner } from "@heroui/react";

  import {  toast } from 'react-toastify';
import {
  Copy,
  Hand,
  LayoutCellsLarge,
  ShieldCheck,
  Star,
  Person,
  Clock,
  Eye,
  TriangleRight,
  Bookmark,
  BookmarkFill,
  Xmark,
  CircleExclamation,
} from "@gravity-ui/icons";
import { authClient } from "../../../../lib/auth-client";
import { bookMarkAction } from "@/actions/bookMarkAction";

const IS_LOGGED_IN = true;
const USER_HAS_PREMIUM = false;

export default function PromptDetailsPage({ params }) {
  const router = useRouter();

  const { id: promptId } = use(params);

  const [prompt, setPrompt] = useState(null);
  const [loading, setLoading] = useState(true);

  const [loadingBookMark, setLoadingBookMark] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState("Spam");
  const [reportText, setReportText] = useState("");

  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const getPromptDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/prompt/${promptId}`,
        );
        const result = await res.json();
        console.log("result", result);
        if (result?.success) {
          setPrompt(result.data);
        } else {
          alert(result?.error || "Failed to load prompt data.");
        }
      } catch (error) {
        console.error("Error fetching prompt:", error);
      } finally {
        setLoading(false);
      }
    };

    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#030712] flex items-center justify-center">
        <Spinner
          size="lg"
          color="primary"
          label="Loading framework parameters..."
        />
      </div>
    );
  }

  if (!prompt) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#030712] flex flex-col items-center justify-center p-4">
        <CircleExclamation className="w-12 h-12 text-rose-500 mb-2" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Prompt Matrix Not Found
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          The requested data stream does not exist or has been deleted.
        </p>
        <Button
          className="mt-4 font-bold"
          color="primary"
          size="sm"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </div>
    );
  }

  const isPublic = prompt.visibility?.toLowerCase() === "public";
  const hasAccess = isPublic || (!isPublic && USER_HAS_PREMIUM);

  const handleBookmarkToggle = async (promptId) => {
    try {
      setLoadingBookMark(true)
    console.log("promptId", promptId);
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    console.log("token", token);
    if (!token) {
      alert("Login required");
      return;
    }
    const result = await bookMarkAction(token, promptId);
    console.log(result);
    toast.success(result?.message)
    } catch (error) {
      
    } finally{
      setLoadingBookMark(false)
    }

  };

  const handleCopyPrompt = () => {
    if (!IS_LOGGED_IN) return alert("Please log in to copy templates.");
    if (!hasAccess) return;

    navigator.clipboard.writeText(prompt.content);
    setPrompt((prev) => ({ ...prev, copyCount: (prev.copyCount || 0) + 1 }));

    alert(
      "📋 Copied to clipboard! Platform analytics copy count incremental scale increased.",
    );
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const freshReview = {
      name: "Current User",
      email: "user@demo.com",
      rating: newRating,
      date: new Date().toISOString().split("T")[0],
      comment: newComment,
    };

    setPrompt((prev) => ({
      ...prev,
      reviews: [freshReview, ...(prev.reviews || [])],
    }));
    setNewComment("");
    alert("🎉 Evaluation captured! Review distributed into public view array.");
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert(
      `🚨 Report Submitted!\nReason: ${reportReason}\nDetails: ${reportText || "None"}`,
    );
    setIsReportModalOpen(false);
    setReportText("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030712] py-10 transition-colors duration-300 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Chip
                  size="sm"
                  variant="flat"
                  color="primary"
                  className="font-bold capitalize"
                >
                  {prompt.aiTool}
                </Chip>
                <Chip
                  size="sm"
                  variant="dot"
                  color="danger"
                  className="font-semibold bg-white dark:bg-transparent capitalize"
                >
                  {prompt.difficultyLevel}
                </Chip>
                {!isPublic && (
                  <Chip
                    size="sm"
                    className="bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider"
                  >
                    Premium Lock
                  </Chip>
                )}
                <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1 ml-1 capitalize">
                  <LayoutCellsLarge className="w-3.5 h-3.5" /> {prompt.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
                {prompt.title}
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                {prompt.description}
              </p>
            </div>

            <Card className="border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm overflow-hidden relative">
              <Card.Header className="px-5 py-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-gray-900/30 flex items-center justify-between">
                <Card.Title className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  System Execution String
                </Card.Title>
                {hasAccess && (
                  <Button
                    size="sm"
                    color="primary"
                    className="font-bold"
                    endContent={<Copy className="w-3.5 h-3.5" />}
                    onClick={handleCopyPrompt}
                  >
                    Copy Code
                  </Button>
                )}
              </Card.Header>

              <Card.Content className="p-5 relative">
                {hasAccess ? (
                  <div className="w-full bg-gray-950 text-emerald-400 font-mono text-sm p-4 rounded-xl border border-gray-900 shadow-inner overflow-x-auto whitespace-pre-wrap select-all">
                    {prompt.content}
                  </div>
                ) : (
                  <div className="relative p-2">
                    <div className="w-full bg-gray-950/20 dark:bg-gray-950/40 font-mono text-sm p-6 rounded-xl blur-[6px] select-none pointer-events-none whitespace-pre-wrap">
                      /execute-context locked-parameter-matrix
                      --hidden-attributes=true --premium-tier=enforced
                      --sandbox=restricted-access-token-failure-re-route-payment
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-white/70 dark:bg-[#0f172a]/80 rounded-xl backdrop-blur-sm z-10 border border-amber-500/10">
                      <h4 className="text-lg font-black text-gray-900 dark:text-white">
                        Subscribe to Premium Architecture
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mt-1 mb-4">
                        This macro is part of our vetted operational catalog.
                        Subscribe to access the terminal string.
                      </p>
                      <Button
                        color="warning"
                        className="font-extrabold shadow-md px-6 rounded-xl"
                        onClick={() => router.push("/payment")}
                      >
                        Unlock Premium Blueprint
                      </Button>
                    </div>
                  </div>
                )}
              </Card.Content>
            </Card>

            <Card className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm">
              <Card.Header className="p-0 border-b border-gray-100 dark:border-white/5 pb-3 mb-4">
                <Card.Title className="text-sm font-black uppercase text-gray-900 dark:text-white flex items-center gap-2">
                  <Hand className="w-4 h-4 text-amber-500" /> Operational
                  Playbook Instructions
                </Card.Title>
              </Card.Header>
              <Card.Content className="p-0">
                <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
                  1. Paste your raw transaction datasets into the primary
                  execution array input.{"\n"}
                  2. Execute using temperature strict modes to enforce
                  deterministic math parsing.{"\n"}
                  3. Keep token context padding clean.
                </p>
              </Card.Content>
            </Card>

            <div className="space-y-6">
              <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />{" "}
                Evaluations & Feedback Loop
              </h3>

              {hasAccess && IS_LOGGED_IN ? (
                <form
                  onSubmit={handleReviewSubmit}
                  className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 shadow-sm"
                >
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Write a Review
                  </h4>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Rating Score:
                    </span>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-lg text-sm px-2 py-1 outline-none text-gray-900 dark:text-white"
                    >
                      {[5, 4, 3, 2, 1].map((num) => (
                        <option key={num} value={num}>
                          {num} Stars
                        </option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Provide operational test logs, constraints, or feature iterations details..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl text-sm p-3 placeholder-gray-400 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    color="primary"
                    className="font-bold rounded-lg px-5"
                  >
                    Submit Review
                  </Button>
                </form>
              ) : !hasAccess ? (
                <div className="p-4 rounded-xl border border-dashed border-gray-200 dark:border-white/5 bg-gray-100/40 dark:bg-gray-900/10 text-center text-xs text-gray-400 italic font-medium">
                  Review engine disabled. Unlock premium runtime access to post
                  verification metrics.
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                {prompt.reviews?.map((rev, index) => (
                  <Card
                    key={index}
                    className="p-4 border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0f172a] shadow-none"
                  >
                    <Card.Header className="p-0 flex items-center justify-between mb-1.5">
                      <div className="flex flex-col items-start overflow-hidden max-w-[70%]">
                        <span className="text-xs font-black text-gray-800 dark:text-gray-200 truncate w-full">
                          {rev.name}
                        </span>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate w-full">
                          {rev.email}
                        </span>
                      </div>
                      <div className="flex items-end flex-col gap-1 shrink-0">
                        <span className="text-[9px] font-mono font-bold text-gray-400">
                          {rev.date}
                        </span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-2.5 h-2.5 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Content className="p-0 mt-2">
                      <Card.Description className="text-xs text-gray-500 dark:text-gray-400 italic leading-relaxed">
                        "{rev.comment}"
                      </Card.Description>
                    </Card.Content>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-6">
            <Card className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm">
              <div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-100 dark:border-white/5 text-center">
                <div className="flex flex-col items-center border-r border-gray-100 dark:border-white/5">
                  <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    {prompt.copyCount || 0}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1 flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Total Copies
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />{" "}
                    5.0
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> System Audit
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                <Button
                  size="lg"
                  variant="light"
                  color="success"
                  
                  className={`w-full font-bold rounded-xl  text-gray-700 dark:text-gray-300 ${loadingBookMark ? "cursor-not-allowed" :"cursor-pointer"}`}
                  onClick={() => handleBookmarkToggle(prompt?._id)}
                >
                {loadingBookMark ? "Saveing..." :"Save Bookmark "}
                </Button>

                <Button
                
                  size="lg"
                  variant="light"
                  className="w-full font-bold rounded-xl text-rose-500 hover:bg-rose-500/10 dark:hover:bg-rose-500/5 transition-all"
                  onClick={() => setIsReportModalOpen(true)}
                  endContent={<CircleExclamation className="w-4 h-4" />}
                >
                  Report Prompt
                </Button>
              </div>
            </Card>

            <Card className="p-5 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Person className="w-3.5 h-3.5" /> System Architect
              </h4>
              <div className="flex items-center gap-3.5">
                <Avatar className="w-12 h-12 rounded-xl border border-gray-100 dark:border-white/5 shrink-0">
                  <Avatar.Image
                    src={prompt.creator?.avatar || ""}
                    alt={prompt.creator?.name || "Architect"}
                  />
                </Avatar>
                <div className="overflow-hidden flex flex-col items-start">
                  <div className="flex items-center gap-1 max-w-full">
                    <span className="text-base font-bold text-gray-900 dark:text-white tracking-tight truncate">
                      {prompt.creator?.name || "Anonymous User"}
                    </span>
                    {prompt.creator?.isVerified && (
                      <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                    )}
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 truncate">
                    {prompt.creator?.email}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              onClick={() => setIsReportModalOpen(false)}
            >
              <Xmark className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2 mb-2">
              <CircleExclamation className="w-5 h-5 text-rose-500" /> Flag
              Content Pattern
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Help us maintain our audited platform quality parameters.
            </p>

            <form onSubmit={handleReportSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Primary Violation Reason
                </label>
                <select
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl text-sm p-2.5 text-gray-900 dark:text-white outline-none"
                >
                  <option value="Inappropriate Content">
                    Inappropriate Content
                  </option>
                  <option value="Spam">Spam/Filler Parameters</option>
                  <option value="Copyright Violation">
                    Copyright Violation
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Optional Descriptive Log
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide explicit context links or systemic token failure metrics..."
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl text-sm p-3 placeholder-gray-400 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-rose-500 shadow-inner"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                  size="sm"
                  variant="light"
                  className="font-semibold text-gray-500"
                  onClick={() => setIsReportModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="font-bold bg-rose-600 text-white shadow-sm px-4"
                >
                  Submit Infraction Report
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
