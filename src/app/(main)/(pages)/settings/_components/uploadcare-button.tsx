"use client";

import React, { useEffect, useRef, useState } from "react";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";

// Props type
type Props = {
  onUpload: (cdnUrl: string) => any;
};

// Register Uploadcare Blocks
LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleUpload = async (e: any) => {
      const cdnUrl = e.detail?.cdnUrl;
      if (!cdnUrl) return;

      const file = await onUpload(cdnUrl);
      if (file) {
        router.refresh();
      }
    };

    const el = ctxProviderRef.current;

    if (el) {
      el.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (el) {
        el.removeEventListener("file-upload-success", handleUpload);
      }
    };
  }, [onUpload, router, isMounted]);

  if (!isMounted) return null; // ⬅️ Don't render during SSR

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="a9428ff5ff90ae7a64eb" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
      />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
