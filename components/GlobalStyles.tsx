'use client';

import React from 'react';
import { font_face_declarations, global_styles } from '@/lib/fonts';

export default function GlobalStyles() {
  return (
    <style>
      {`
        ${font_face_declarations}
        ${global_styles}
      `}
    </style>
  );
}

