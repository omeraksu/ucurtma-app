import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Avatar,
  Text,
  Button,
  Tooltip,
  Progress,
  PseudoBox,
} from '@chakra-ui/core';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronRight, ChevronLeft } from 'react-feather';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from './card';
import CampaignError from '../view/campaign/campaign-error';
import CardTargetInfo from './card-target-info';
import Loader from './loader';

SwiperCore.use([Navigation]);

function FeaturedCampaign({ loading, data, error }) {
  const navigate = useNavigate();
  const { t } = useTranslation('featuredCampaign');
  const [activeCard, setActiveCard] = useState(0);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <CampaignError />;
  }

  const arrowProps = {
    pos: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    zIndex: 4,
    bg: 'white',
    borderRadius: '50%',
    w: '40px',
    h: '40px',
    cursor: 'pointer',
    d: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'lg',
  };

  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      onSlideChange={swiper => setActiveCard(swiper.realIndex)}
      centeredSlides
      loop
      navigation={{
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        554: { slidesPerView: 2 },
        1600: { slidesPerView: 3 },
      }}
    >
      <Box className="swiper-button-next2" right="0" {...arrowProps}>
        <Box as={ChevronRight} />
      </Box>
      <Box className="swiper-button-prev2" left="0" {...arrowProps}>
        <Box as={ChevronLeft} />
      </Box>
      {data.campaigns.campaigns.map((campaign, campaignIndex) => {
        const currentFund = parseInt(campaign?.totalFunds, 10);
        const totalPercent = (currentFund * 100) / campaign?.campaignTarget;

        return (
          <SwiperSlide
            key={campaign.campaignId}
            style={{
              transform: campaignIndex !== activeCard && `scale(0.85)`,
              transition: '0.2s ease all',
            }}
          >
            <Card
              display="flex"
              px={8}
              py={4}
              borderRadius="0.5rem"
              w="full"
              minW="0"
              flexDir="column"
              justifyContent="space-between"
              mb={4}
              boxShadow="sm"
              // transform={}
            >
              <Box>
                <Flex flexDir="column" alignItems="center">
                  <Avatar
                    size="lg"
                    src={campaign?.student?.profilePhoto}
                    name={campaign?.student?.name}
                  />
                  <PseudoBox
                    as="h3"
                    mt={4}
                    color="gray.600"
                    textAlign="center"
                    _hover={{ textDecoration: 'underline' }}
                    fontWeight={600}
                  >
                    <Link to={`/campaign/${campaign?.campaignId}`}>
                      {campaign?.student?.name}
                    </Link>
                  </PseudoBox>
                  <Text color="gray.500" textAlign="center">
                    {campaign?.student?.school}
                  </Text>
                  <Tooltip
                    label={campaign?.campaignTitle}
                    textAlign="center"
                    p={4}
                    zIndex={4}
                  >
                    <Heading
                      as="h4"
                      size="sm"
                      textAlign="center"
                      my={4}
                      width="full"
                      minW={0}
                      display="-webkit-box"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      css={{
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {campaign?.campaignTitle}
                    </Heading>
                  </Tooltip>
                  <Box w="full" mt={2}>
                    <Flex justifyContent="space-between">
                      <CardTargetInfo
                        title={t('totalFund')}
                        percent={totalPercent}
                      />

                      <CardTargetInfo
                        title={t('target')}
                        price={campaign?.campaignTarget}
                      />
                    </Flex>

                    <Progress
                      color="green"
                      height="12px"
                      value={totalPercent}
                      borderRadius="4px"
                    />
                    <Flex mt={2} alignItems="center">
                      <Box
                        fontSize="14px"
                        textAlign="center"
                        color="gray.400"
                        w="full"
                        h={63}
                      >
                        <Trans
                          defaults={currentFund < 1 ? 'noFund' : 'donate'}
                          t={t}
                          values={{ count: campaign?.supporterCount }}
                          components={{
                            campaignButton: (
                              <Button
                                variant="link"
                                onClick={() =>
                                  navigate(
                                    `/campaign/${campaign?.campaignId}`,
                                    {
                                      state: { redirected: true },
                                    }
                                  )
                                }
                                verticalAlign="inherit"
                                fontSize="14px"
                                color="gray.400"
                              >
                                buraya tıkla.
                              </Button>
                            ),
                          }}
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <Button
                    as={Link}
                    to={`/campaign/${campaign?.campaignId}`}
                    variant="outline"
                    variantColor="linkBlue"
                    mt={4}
                    size="sm"
                  >
                    {t('goToCampaign')}
                  </Button>
                </Flex>
              </Box>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default FeaturedCampaign;
