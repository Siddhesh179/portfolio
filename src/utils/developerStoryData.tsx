import { allCertificates } from './constants/Certificate';
import { allEducation } from './constants/Education';
import { allExperiences } from './constants/Experiences';
import { allOthers } from './constants/Others';
import { allProjects } from './constants/Projects';
import {
	AchievementProps,
	CertificateProps,
	EducationProps,
	ExperienceProps,
	OtherProps,
	ProjectProps,
	STORY_TYPES,
} from './developerStory';

export interface singleDeveloperStoryDataProps {
	id: string;
	storyType: STORY_TYPES;
	data:
		| EducationProps
		| AchievementProps
		| CertificateProps
		| ExperienceProps
		| OtherProps
		| ProjectProps;
}

export interface DeveloperStoryDataProps
	extends Array<singleDeveloperStoryDataProps> {}

export const developerStoryData: DeveloperStoryDataProps = [
	{
		id: 'exp-disecto',
		storyType: 'experience',
		data: allExperiences.disecto,
	},
	{
		id: 'exp-adgvit',
		storyType: 'experience',
		data: allExperiences.adgvit,
	},
	{
		id: 'edu-vit',
		storyType: 'education',
		data: allEducation.vit,
	},
	{
		id: 'project-portfolio2022',
		storyType: 'project',
		data: allProjects.portfolio2022,
	},
	{
		id: 'blog-hashgenerator',
		storyType: 'other',
		data: allOthers.blog2,
	},
	{
		id: 'project-hashgenerator2022',
		storyType: 'project',
		data: allProjects.hashgenerator2022,
	},
	{
		id: 'project-lasertag2022',
		storyType: 'project',
		data: allProjects.laserTag2022,
	},
	{
		id: 'project-ccs2022',
		storyType: 'project',
		data: allProjects.ccs2022,
	},
	{
		id: 'project-otobusbackend2022',
		storyType: 'project',
		data: allProjects.otobusBackend2022,
	},
	{
		id: 'project-otobusfrontend2022',
		storyType: 'project',
		data: allProjects.otobusFrontend2022,
	},
	{
		id: 'project-cms2022',
		storyType: 'project',
		data: allProjects.cms2022,
	},
	{
		id: 'blog-toggletheme',
		storyType: 'other',
		data: allOthers.blog1,
	},
	{
		id: 'project-adgwebsite2022',
		storyType: 'project',
		data: allProjects.adgWebsite2022,
	},
	{
		id: 'project-riddler2022',
		storyType: 'project',
		data: allProjects.riddlerWebsite2022,
	},
	{
		id: 'exp-designAndCode',
		storyType: 'experience',
		data: allExperiences.designAndCode,
	},
	{
		id: 'exp-nishkaera',
		storyType: 'experience',
		data: allExperiences.nishkaera,
	},
	{
		id: 'res-3',
		storyType: 'other',
		data: allOthers.res3,
	},
	{
		id: 'res-2',
		storyType: 'other',
		data: allOthers.res2,
	},
	{
		id: 'res-1',
		storyType: 'other',
		data: allOthers.res1,
	},
	{
		id: 'exp-csivit',
		storyType: 'experience',
		data: allExperiences.csivit,
	},
	{
		id: 'project-portfolio2021',
		storyType: 'project',
		data: allProjects.portfolio2021,
	},
	{
		id: 'cert-fcc2',
		storyType: 'certificate',
		data: allCertificates.fcc2,
	},
	{
		id: 'cert-fcc1',
		storyType: 'certificate',
		data: allCertificates.fcc1,
	},
	{
		id: 'edu-dpsrkp',
		storyType: 'education',
		data: allEducation.dpsrkp,
	},
	{
		id: 'edu-smsslg',
		storyType: 'education',
		data: allEducation.smsslg,
	},
	{
		id: 'cert-ll1',
		storyType: 'certificate',
		data: allCertificates.ll1,
	},
	{
		id: 'cert-ll2',
		storyType: 'certificate',
		data: allCertificates.ll2,
	},
	{
		id: 'cert-ll3',
		storyType: 'certificate',
		data: allCertificates.ll3,
	},
];
