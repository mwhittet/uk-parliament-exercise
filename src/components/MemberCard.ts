'use strict';

import type { MemberApi } from '../types';
import '../styles/MemberCard.styles.scss';

export default class MemberCard extends HTMLElement {
  error: null;
  fetching: boolean;

  constructor() {
    super();
    this.error = null;
    this.fetching = true;
  }

  connectedCallback() {
    this.getMemberData();
  }

  // Retrieve the member information using the ID from the query parameter
  async getMemberData() {
    const searchParams = new URLSearchParams(window.location.search);
    const memberId = searchParams.has('id') ? searchParams.get('id') : null;

    try {
      const response = await fetch(
        `https://members-api.parliament.uk/api/Members/${memberId}`
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data: MemberApi = await response.json();
      this.render(data);
    } catch (err) {
      this.error = err.message;
    } finally {
      this.fetching = false;
    }
  }

  render(data: MemberApi) {
    const { latestHouseMembership, latestParty, nameDisplayAs, thumbnailUrl } =
      data.value;
    const { membershipEndDate, membershipFrom } = latestHouseMembership;
    const { backgroundColour, name } = latestParty;

    const imageBorder = latestParty.foregroundColour
      ? `style="border-color: #${backgroundColour};"`
      : '';
    const memberStatus = !!membershipEndDate
      ? '<div class="member-card-status">No longer serving</div>'
      : '';

    const template = `
      <div class="member-card">
        <img alt="Image of ${nameDisplayAs}" class="member-card-image" src="${thumbnailUrl}" ${imageBorder} />
        <div class="member-card-content">
          <p class="member-card-party">${name}</p>
          <p class="member-card-name">${nameDisplayAs}</p>
          <p class="member-card-constituency">${membershipFrom}</p>
          ${memberStatus}
        </div>
      </div>
    `;

    this.innerHTML = template;
  }
}
