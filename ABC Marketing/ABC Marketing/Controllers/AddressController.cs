using ABC_Marketing.Data;
using ABC_Marketing.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ABC_Marketing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly AppDatabaseContext _db;

        public AddressController(AppDatabaseContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppDatabaseContext>>> Get()
        {
            return Ok(await _db.Addresses.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Get(int id)
        {
            var address = _db.Addresses.Find(id);
            return Ok(address);
        }

        [HttpPost]
        public async Task<ActionResult<List<AppDatabaseContext>>> Post(Address data)  //Dataset dataset
        {
            _db.Addresses.Add(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }

        [HttpPut]
        public async Task<ActionResult<List<AppDatabaseContext>>> Put(Address data)
        {
            _db.Addresses.Update(data);
            _db.SaveChanges();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Delete(int? id)
        {
            var data = _db.Addresses.Find(id);
            _db.Addresses.Remove(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }

        [HttpGet("getByCustomerID/{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> GetByCustomerID(int id)
        {
            IEnumerable<Address> address = _db.Addresses.Where(x => x.CustomerID == id);
            if (address == null)
            {
                return NotFound();
            }
            return Ok(address);
        }

        [HttpDelete("deleteByCustomerID/{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> DeleteByCustomerID(int? id)
        {
            IEnumerable<Address> data = _db.Addresses.Where(x => x.CustomerID == id);
            _db.Addresses.RemoveRange(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }
    }
}
