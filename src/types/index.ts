export type MemberApi = {
  value: Value;
  links: Link[];
};

type Value = {
  id: number;
  nameListAs: string;
  nameDisplayAs: string;
  nameFullTitle: string;
  nameAddressAs: string;
  latestParty: LatestParty;
  gender: string;
  latestHouseMembership: LatestHouseMembership;
  thumbnailUrl: string;
};

type LatestParty = {
  id: number;
  name: string;
  abbreviation: string;
  backgroundColour: string;
  foregroundColour: string;
  isLordsMainParty: boolean;
  isLordsSpiritualParty: boolean;
  governmentType: number;
  isIndependentParty: boolean;
};

type LatestHouseMembership = {
  membershipFrom: string;
  membershipFromId: number;
  house: number;
  membershipStartDate: string;
  membershipEndDate: string;
  membershipEndReason: string;
  membershipEndReasonNotes: string;
  membershipEndReasonId: number;
  membershipStatus: any;
};

type Link = {
  rel: string;
  href: string;
  method: string;
};
