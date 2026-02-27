"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, XCircle, AlertCircle, Clock, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisaRequirement {
  country?: string;
  required: boolean;
  type?: string;
  duration?: string;
  cost?: string;
  processingTime?: string;
  documents?: string[];
  notes?: string;
  applyUrl?: string;
  visaFree?: boolean;
  eVisa?: boolean;
}

interface VisaInfoCardProps {
  result: {
    nationality?: string;
    destination?: string;
    visa?: VisaRequirement;
    requirements?: VisaRequirement;
    summary?: string;
    tips?: string[];
    officialUrl?: string;
  };
}

export default function VisaInfoCard({ result }: VisaInfoCardProps) {
  const visa = result.visa || result.requirements;
  const isRequired = visa?.required && !visa?.visaFree;
  const isVisaFree = visa?.visaFree || !visa?.required;
  const isEVisa = visa?.eVisa;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <FileText className="h-3.5 w-3.5 text-primary" />
        <span className="font-medium text-foreground">비자 정보</span>
        {result.nationality && <span>{result.nationality}</span>}
        {result.destination && (
          <>
            <span>→</span>
            <span>{result.destination}</span>
          </>
        )}
      </div>

      {visa && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border bg-card p-4 space-y-3"
        >
          {/* Status banner */}
          <div
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2",
              isVisaFree
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                : isEVisa
                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
            )}
          >
            {isVisaFree ? (
              <CheckCircle className="h-5 w-5 shrink-0" />
            ) : isEVisa ? (
              <AlertCircle className="h-5 w-5 shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 shrink-0" />
            )}
            <div>
              <p className="font-semibold text-sm">
                {isVisaFree ? "비자 불필요 (무비자)" : isEVisa ? "전자비자 (e-Visa)" : "비자 필요"}
              </p>
              {visa.type && <p className="text-xs opacity-80">{visa.type}</p>}
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-2">
            {visa.duration && (
              <div className="rounded-lg bg-muted/50 p-2">
                <p className="text-[10px] text-muted-foreground">체류 가능 기간</p>
                <p className="mt-0.5 text-sm font-semibold">{visa.duration}</p>
              </div>
            )}
            {visa.cost && (
              <div className="rounded-lg bg-muted/50 p-2">
                <p className="text-[10px] text-muted-foreground">비자 비용</p>
                <p className="mt-0.5 text-sm font-semibold">{visa.cost}</p>
              </div>
            )}
            {visa.processingTime && (
              <div className="rounded-lg bg-muted/50 p-2">
                <p className="text-[10px] text-muted-foreground">처리 기간</p>
                <div className="mt-0.5 flex items-center gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <p className="text-sm font-semibold">{visa.processingTime}</p>
                </div>
              </div>
            )}
          </div>

          {/* Required documents */}
          {visa.documents && visa.documents.length > 0 && (
            <div>
              <p className="mb-1.5 text-xs font-medium text-muted-foreground">필요 서류</p>
              <ul className="space-y-1">
                {visa.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {visa.notes && (
            <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
              ⚠️ {visa.notes}
            </div>
          )}

          {(visa.applyUrl || result.officialUrl) && (
            <a
              href={visa.applyUrl || result.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-medium text-primary transition-colors hover:bg-muted"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              공식 신청 페이지
            </a>
          )}
        </motion.div>
      )}

      {/* Tips */}
      {result.tips && result.tips.length > 0 && (
        <div className="space-y-1">
          {result.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg bg-muted/40 px-3 py-2 text-xs">
              <span className="text-primary mt-0.5">•</span>
              <span className="text-muted-foreground">{tip}</span>
            </div>
          ))}
        </div>
      )}

      {result.summary && (
        <p className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {result.summary}
        </p>
      )}
    </div>
  );
}
