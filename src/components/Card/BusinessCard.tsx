"use client";

import { useState } from "react";
import { BusinessCardData } from "@/types/ui/about";
import { cx } from "@/utils/cx"
import styles from "./card.module.css";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

interface BusinessCardProps {
  data: BusinessCardData;
}

export default function BusinessCard({ data }: BusinessCardProps) {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
      <div
          className={styles["card"]}
          onClick={() => setIsFlipped(prev => !prev)}
      >
          <div className={cx(styles, "wrapper", !isFlipped ? styles["hint-active"] : "")}>
              <div className={cx(styles, "inner", isFlipped ? styles["flipped"] : "")}>
                  <CardFront data={data}/>
                  <CardBack data={data}/>
              </div>
          </div>
      </div>
  )
}