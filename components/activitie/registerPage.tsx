'use client';
import SideNavigationMenu from '@/components/commons/SideNavigationMenu';
import Gnb from '@/components/commons/gnb/gnb';
import Button from '@/components/commons/Button';
import BaseInput from '@/components/input/BaseInput';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import TextInput from '@/components/input/TextInput';
import PriceInput from '@/components/input/PriceInput';
import AddressInput from '@/components/input/AddressInput';
import TimeInput from '@/components/input/TimeInput';
import Footer from '@/components/commons/Footer';
import BannerImageInput from '@/components/input/BannerImageInput';
import BioImageInput from '@/components/input/BioImageInput';
import CategoryInput from '@/components/input/CategoryInput';
import { useRouter } from 'next/navigation';
import {
  postActivities,
  getActivitiesID,
} from '@/apis/activities/@common/activities';
import { ActivitiesData } from '@/app/activities/register/page';
import { useMutation, useQuery, queryOptions } from '@tanstack/react-query';
import { ActivitiesDataType } from '@/types/activitiesType';
import { patchActivities } from '@/apis/my-activities/@common/myActivites';
import { useQueryClient } from '@tanstack/react-query';

interface RegisterpageProps {
  id?: number;
}

export default function Registerpage({ id }: RegisterpageProps) {
  const [modifyState, setModifyState] = useState(false);
  const [bannerImageUrl, setBannerImageUrl] = useState<string[]>([]);
  const [subImageUrls, setSubImageUrls] = useState<string[]>([]);
  const [subImageIds, setSubImageIds] = useState<number[]>([]);
  const router = useRouter();
  const queryClient = useQueryClient();

  const methods = useForm<ActivitiesData>({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      description: '',
      address: '',
      schedules: [],
      price: 0,
      category: '',
      bannerImageUrl: '',
      subImageUrls: [],
      scheduleIdsToRemove: [],
    },
  });
  const { handleSubmit, control, setValue, reset, getValues } = methods;

  const { mutate: registerMutation } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: ActivitiesData) => postActivities(data),
  });

  const { mutate: modifyActiviteMutation } = useMutation({
    mutationKey: ['register', 'detail', id],
    mutationFn: ({ id, data }: { id: number; data: ActivitiesData }) =>
      patchActivities(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['register', 'detail', id] });
      router.push('/activities');
    },
  });

  const handlevalue = (id: keyof ActivitiesData, value: any) => {
    setValue(id, value);
  };

  const onsubmit: SubmitHandler<ActivitiesData> = async (
    data: ActivitiesData,
  ) => {
    if (bannerImageUrl.length === 0) {
      return;
    }
    if (modifyState) {
      await handleModifyRegister(data);
      return;
    }
    const formData = {
      ...data,
      price: Number(data.price),
      bannerImageUrl: bannerImageUrl[0],
      subImageUrls,
    };

    registerMutation(formData, {
      onSuccess: (data) => {
        console.log('onSuccess', data);
        router.push('/activities');
      },
      onError: () => {
        console.warn('onError', data);
      },
    });
  };

  const { data: activitiesData, isLoading } = useQuery(
    queryOptions({
      queryKey: ['register', 'detail', id],
      enabled: !!id,
      queryFn: () => getActivitiesID(id as number),
    }),
  );

  useEffect(() => {
    const handleAddData = (
      isLoading: boolean,
      data: ActivitiesDataType | null,
    ) => {
      if (isLoading || !data) {
        return;
      }
      setModifyState(!!id);
      const addData: ActivitiesData = {
        title: data.title,
        description: data.description,
        address: data.address,
        price: data.price,
        category: data.category,
        schedules: data.schedules,
        bannerImageUrl: data.bannerImageUrl,
        subImageUrls: data.subImages.map((v) => v.imageUrl),
        scheduleIdsToRemove: [],
      };
      setSubImageIds([...data.subImages.map((v) => v.id)]);
      setBannerImageUrl([data.bannerImageUrl]);
      setSubImageUrls([...data.subImages.map((v) => v.imageUrl)]);

      reset({ ...addData });
    };

    handleAddData(isLoading, activitiesData);
  }, [activitiesData, isLoading, reset]);

  const handleModifyRegister = async (data: ActivitiesData) => {
    const apiData = {
      ...data,
      price: Number(data.price),
      bannerImageUrl: bannerImageUrl[0],
      subImageIdsToRemove: [...subImageIds],
      subImageUrlsToAdd: [...subImageUrls],
      scheduleIdsToRemove: [
        ...data.schedules.map((v) => v.id),
        ...(data?.scheduleIdsToRemove ?? []),
      ],
      schedulesToAdd: data.schedules,
    };

    modifyActiviteMutation({ id: id as number, data: apiData });
  };

  return (
    <FormProvider {...methods}>
      <div className="bg-gray50 min-w-[350px]">
        <Gnb />
        <main className="flex justify-center min-h-[100vh] max-h-[100%] px-6 mobile:px-4 pt-[142px] pb-[72px] tablet:pt-[94px] mobile:pt-[94px] mb-[150px] mobile:mb-[100px]">
          <div className="flex gap-6  ">
            <SideNavigationMenu />
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="flex flex-col flex-grow gap-6">
                <div className="flex justify-between">
                  <p className="text-title text-black">
                    내 체험 {`${modifyState ? '수정' : '등록'}`}{' '}
                  </p>
                  <Button
                    width={120}
                    height={45}
                    fontSize={16}
                    textBold={true}
                    btnColor={'nomadBlack'}
                    textColor={'white'}
                    rounded={4}
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    {`${modifyState ? '수정' : '등록'}`} 하기
                  </Button>
                </div>
                <BaseInput name="title" placeholder="제목" control={control} />
                <CategoryInput
                  handlevalue={handlevalue}
                  value={getValues('category')}
                />
                <TextInput
                  name="description"
                  placeholder="설명"
                  control={control}
                />
                <PriceInput
                  name="price"
                  placeholder="가격"
                  control={control}
                  labelName="가격"
                />
                <AddressInput
                  handlevalue={handlevalue}
                  value={getValues('address')}
                />
                <TimeInput
                  name="time"
                  placeholder="YY/MM/DD"
                  control={control}
                  labelName="예약 가능 시간대"
                  handlevalue={handlevalue}
                  value={getValues('schedules')}
                />
                <BannerImageInput
                  files={bannerImageUrl}
                  setFiles={setBannerImageUrl}
                />
                <BioImageInput
                  files={subImageUrls}
                  setFiles={setSubImageUrls}
                />
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </FormProvider>
  );
}