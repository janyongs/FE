'use client';

import React, { useState } from 'react';
import MyPageForm from '@/components/myProfile/MyPageForm';
import SideNavigationMenu from '@/components/commons/SideNavigationMenu';
import Gnb from '@/components/commons/gnb/gnb';

const MyPage = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  return (
    <div className="flex gap-6 justify-center bg-[#FAFAFA] pt-[100px]">
      <Gnb />
      <main className="flex justify-center min-h-[100vh] max-h-[100%]  bg-gray50 pt-[142px] pb-[72px]">
        <div className="flex gap-6 w-[1200px]">
          <SideNavigationMenu />
          <MyPageForm
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        </div>
      </main>
    </div>
  );
};

export default MyPage;
