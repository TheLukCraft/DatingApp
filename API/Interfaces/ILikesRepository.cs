using System;
using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces;

public interface ILikesRepository
{
    Task<UserLike?> GetUserLike(int sourceUserId, int targetUserId);
    Task<PagedList<MemberDto>> GetUserLikes(LikesParams likesParams);
    Task<IEnumerable<int>> GetCurrentLikeIds(int currentUserId);
    void DeleteLike(UserLike userLike);
    void AddLike(UserLike userLike);
    Task<bool> SaveChanges();
}
