using System;
using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Data;

public class LikesRepository : ILikesRepository
{
    public void AddLike(UserLike userLike)
    {
        throw new NotImplementedException();
    }

    public void DeleteLike(UserLike userLike)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<int>> GetCurrentLikeIds(int currentUserId)
    {
        throw new NotImplementedException();
    }

    public Task<UserLike?> GetUserLike(int sourceUserId, int likedUserId)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<MemberDto>> GetUserLikes(string predicate, int userId)
    {
        throw new NotImplementedException();
    }

    public Task<bool> SaveChanges()
    {
        throw new NotImplementedException();
    }
}
